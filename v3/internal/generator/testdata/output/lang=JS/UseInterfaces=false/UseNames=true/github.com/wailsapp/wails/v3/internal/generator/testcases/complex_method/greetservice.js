// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * GreetService is great
 * @module
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * Greet does XYZ
 * It has a multiline doc comment
 * The comment has even some * / traps!!
 * @param {string} str
 * @param {$models.Person[]} people
 * @param {{"AnotherCount": number, "AnotherOne": $models.Person | null}} $2
 * @param {{ [_: `${number}`]: boolean | null }} assoc
 * @param {(number | null)[]} $4
 * @param {string[]} other
 * @returns {Promise<[$models.Person, any, number[]]> & { cancel(): void }}
 */
export function Greet(str, people, $2, assoc, $4, ...other) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.Greet", str, people, $2, assoc, $4, other));
    let $typingPromise = /** @type {any} */($resultPromise.then(($result) => {
        $result[0] = $$createType0($result[0]);
        $result[2] = $$createType1($result[2]);
        return $result;
    }));
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

// Private type creation functions
const $$createType0 = $models.Person.createFrom;
const $$createType1 = $Create.Array($Create.Any);