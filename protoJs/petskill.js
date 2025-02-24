/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PetSkill = (function() {

    /**
     * Properties of a PetSkill.
     * @exports IPetSkill
     * @interface IPetSkill
     * @property {number|null} [skill] PetSkill skill
     * @property {Array.<number>|null} [skillBuffId] PetSkill skillBuffId
     */

    /**
     * Constructs a new PetSkill.
     * @exports PetSkill
     * @classdesc Represents a PetSkill.
     * @implements IPetSkill
     * @constructor
     * @param {IPetSkill=} [properties] Properties to set
     */
    function PetSkill(properties) {
        this.skillBuffId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PetSkill skill.
     * @member {number} skill
     * @memberof PetSkill
     * @instance
     */
    PetSkill.prototype.skill = 0;

    /**
     * PetSkill skillBuffId.
     * @member {Array.<number>} skillBuffId
     * @memberof PetSkill
     * @instance
     */
    PetSkill.prototype.skillBuffId = $util.emptyArray;

    /**
     * Creates a new PetSkill instance using the specified properties.
     * @function create
     * @memberof PetSkill
     * @static
     * @param {IPetSkill=} [properties] Properties to set
     * @returns {PetSkill} PetSkill instance
     */
    PetSkill.create = function create(properties) {
        return new PetSkill(properties);
    };

    /**
     * Encodes the specified PetSkill message. Does not implicitly {@link PetSkill.verify|verify} messages.
     * @function encode
     * @memberof PetSkill
     * @static
     * @param {IPetSkill} message PetSkill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PetSkill.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.skill != null && Object.hasOwnProperty.call(message, "skill"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.skill);
        if (message.skillBuffId != null && message.skillBuffId.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.skillBuffId.length; ++i)
                writer.int32(message.skillBuffId[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified PetSkill message, length delimited. Does not implicitly {@link PetSkill.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PetSkill
     * @static
     * @param {IPetSkill} message PetSkill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PetSkill.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PetSkill message from the specified reader or buffer.
     * @function decode
     * @memberof PetSkill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PetSkill} PetSkill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PetSkill.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PetSkill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.skill = reader.int32();
                    break;
                }
            case 2: {
                    if (!(message.skillBuffId && message.skillBuffId.length))
                        message.skillBuffId = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.skillBuffId.push(reader.int32());
                    } else
                        message.skillBuffId.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PetSkill message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PetSkill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PetSkill} PetSkill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PetSkill.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PetSkill message.
     * @function verify
     * @memberof PetSkill
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PetSkill.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.skill != null && message.hasOwnProperty("skill"))
            if (!$util.isInteger(message.skill))
                return "skill: integer expected";
        if (message.skillBuffId != null && message.hasOwnProperty("skillBuffId")) {
            if (!Array.isArray(message.skillBuffId))
                return "skillBuffId: array expected";
            for (var i = 0; i < message.skillBuffId.length; ++i)
                if (!$util.isInteger(message.skillBuffId[i]))
                    return "skillBuffId: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a PetSkill message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PetSkill
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PetSkill} PetSkill
     */
    PetSkill.fromObject = function fromObject(object) {
        if (object instanceof $root.PetSkill)
            return object;
        var message = new $root.PetSkill();
        if (object.skill != null)
            message.skill = object.skill | 0;
        if (object.skillBuffId) {
            if (!Array.isArray(object.skillBuffId))
                throw TypeError(".PetSkill.skillBuffId: array expected");
            message.skillBuffId = [];
            for (var i = 0; i < object.skillBuffId.length; ++i)
                message.skillBuffId[i] = object.skillBuffId[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a PetSkill message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PetSkill
     * @static
     * @param {PetSkill} message PetSkill
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PetSkill.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.skillBuffId = [];
        if (options.defaults)
            object.skill = 0;
        if (message.skill != null && message.hasOwnProperty("skill"))
            object.skill = message.skill;
        if (message.skillBuffId && message.skillBuffId.length) {
            object.skillBuffId = [];
            for (var j = 0; j < message.skillBuffId.length; ++j)
                object.skillBuffId[j] = message.skillBuffId[j];
        }
        return object;
    };

    /**
     * Converts this PetSkill to JSON.
     * @function toJSON
     * @memberof PetSkill
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PetSkill.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PetSkill
     * @function getTypeUrl
     * @memberof PetSkill
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PetSkill.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PetSkill";
    };

    return PetSkill;
})();

module.exports = $root;
