export class ParseCsv {

    static csv_parse(line) {
        var res = [];
        var pos = 0;
        var sep = ',';

        while (true) {
            var c = line.charAt(pos);
            if (c == '"') {
                // quoted value (ignore separator within)
                var txt = "";
                do {
                    var startp = line.indexOf('"', pos);
                    var endp = line.indexOf('"', startp + 1);
                    if (endp == -1) throw 'quote NOT paired';

                    txt = txt + line.substring(startp + 1, endp);
                    pos = endp + 1;
                    c = line.charAt(pos);
                    if (c == '"') txt = txt + '"';
                    // check first char AFTER quoted string, if it is another
                    // quoted string without separator, then append it
                    // this is the way to "escape" the quote char in a quote. example:
                    //   value1,"blub""blip""boing",value3  will result in blub"blip"boing  for the middle
                } while (c == '"');
                res.push(txt);
                pos++;
                if (c == "") break;
            } else {
                // no quotes used, just look for the first separator
                var startp = line.indexOf(sep, pos);
                if (startp >= 0) {
                    res.push(line.substring(pos, startp));
                    pos = startp + 1;
                } else {
                    // no separator found -> use rest of string and terminate
                    res.push(line.substring(pos));
                    break;
                }
            }
        }
        return res;
    }


    static csv_open(source) {
        var rs = [];
        source.split('\n').forEach(line => {
            line = line.replace(/\r+$/, '');

            if (line == '') return;

            rs.push(this.csv_parse(line));
        });
        return rs;
    }

    static rs_parse_type(col, v) {
        var t;

        // basic type
        t = v.match(/^\s*(\w+)\s*$/);
        if (t)
            return { name: "bas", type: t[1] };

        // array of basic type
        t = v.match(/^\s*\[\]\s*(\w+)\s*$/);
        if (t)
            return { name: "aob", type: t[1] };

        // array of object
        t = v.match(/^\s*\[\]\s*(\{[^}]+\})\s*$/);
        if (t) {
            var cols = [];
            var re = /(\w+)\s+([\w_]+)\s*;?/g;

            while (true) {
                var a = re.exec(t[1]);
                if (!a) break;

                cols.push({ type: a[1], name: a[2] });
            }
            return { name: "aoo", cols: cols };
        }

        // error
        throw "rs: type error => " + col + ", " + v;
    }

    static rs_make_meta(rs) {
        if (rs.length < 2)
            throw "rs: less than 2 rows";
        if (rs[0].length < 1)
            throw "rs: no columns found";

        var meta: any = {};
        rs.meta = meta;

        // cols
        meta.cols = rs[0];

        // types
        meta.types = [];
        for (var i = 0; i < rs[1].length; i++) {
            meta.types[i] = this.rs_parse_type(meta.cols[i], rs[1][i]);
        }

        // key check
        if (meta.types[0].name != "bas") throw "first col MUST be basic type: " + meta.cols[0];
    }

    static rs_get_val(v, t) {
        if (t == "string") {
            return v;
        } else {
            v = Number(v);
            return Number.isNaN(v) ? 0 : v;
        }
    }

    static rs_make_tab(rs) {
        var tab = {};

        // make meta
        this.rs_make_meta(rs);

        // rows
        for (var i = 2; i < rs.length; i++) {
            var row = rs[i];

            var obj = {};
            tab[row[0]] = obj;

            // cols
            for (var j = 0; j < rs.meta.types.length; j++) {
                var col = rs.meta.cols[j];
                var tp = rs.meta.types[j];

                if (tp.name == "bas") {
                    obj[col] = this.rs_get_val(row[j], tp.type);

                } else if (tp.name == "aob") {
                    var a = [];
                    obj[col] = a;

                    if (row[j] == '') continue;

                    row[j].split('^').map(v => {
                        a.push(this.rs_get_val(v, tp.type));
                    });

                } else if (tp.name == "aoo") {
                    var a = [];
                    obj[col] = a;

                    if (row[j] == '') continue;

                    row[j].split('^').map(v => {
                        var o = {};
                        a.push(o);

                        v.split('|').map((v2, k) => {
                            if (tp.cols[k]) {
                                o[tp.cols[k].name] = this.rs_get_val(v2, tp.cols[k].type);
                            } else {
                                console.log("error cfg data:", tp.cols, k);
                            }
                        });
                    });
                }
            }
        }

        return tab;
    }

}

