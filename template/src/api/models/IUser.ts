/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.5
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IUser
 */
export interface IUser {
    /**
     * 
     * @type {number}
     * @memberof IUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof IUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof IUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof IUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof IUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof IUser
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof IUser
     */
    phone?: string;
    /**
     * User Status
     * @type {number}
     * @memberof IUser
     */
    userStatus?: number;
}

export function IUserFromJSON(json: any): IUser {
    return IUserFromJSONTyped(json, false);
}

export function IUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): IUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'userStatus': !exists(json, 'userStatus') ? undefined : json['userStatus'],
    };
}

export function IUserToJSON(value?: IUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'password': value.password,
        'phone': value.phone,
        'userStatus': value.userStatus,
    };
}


