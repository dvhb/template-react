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


import * as runtime from '../runtime';
import {
    IUser,
    IUserFromJSON,
    IUserToJSON,
} from '../models';

export interface CreateUserRequest {
    body: IUser;
}

export interface CreateUsersWithArrayInputRequest {
    body: Array<IUser>;
}

export interface CreateUsersWithListInputRequest {
    body: Array<IUser>;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface UpdateUserRequest {
    username: string;
    body: IUser;
}

/**
 *
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IUserToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest): Promise<void> {
        await this.createUserRaw(requestParameters);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInputRaw(requestParameters: CreateUsersWithArrayInputRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUsersWithArrayInput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/createWithArray`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(IUserToJSON),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequest): Promise<void> {
        await this.createUsersWithArrayInputRaw(requestParameters);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInputRaw(requestParameters: CreateUsersWithListInputRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUsersWithListInput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/createWithList`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(IUserToJSON),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInput(requestParameters: CreateUsersWithListInputRequest): Promise<void> {
        await this.createUsersWithListInputRaw(requestParameters);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<void> {
        await this.deleteUserRaw(requestParameters);
    }

    /**
     * Get user by user name
     */
    async getUserByNameRaw(requestParameters: GetUserByNameRequest): Promise<runtime.ApiResponse<IUser>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByName.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IUserFromJSON(jsonValue));
    }

    /**
     * Get user by user name
     */
    async getUserByName(requestParameters: GetUserByNameRequest): Promise<IUser> {
        const response = await this.getUserByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     * Logs user into the system
     */
    async loginUserRaw(requestParameters: LoginUserRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling loginUser.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling loginUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Logs user into the system
     */
    async loginUser(requestParameters: LoginUserRequest): Promise<string> {
        debugger
        const response = await this.loginUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUserRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUser(): Promise<void> {
        await this.logoutUserRaw();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling updateUser.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IUserToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<void> {
        await this.updateUserRaw(requestParameters);
    }

}
