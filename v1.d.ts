/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace businessmessages_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Business Messages API
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const businessmessages = google.businessmessages('v1');
     * ```
     */
    export class Businessmessages {
        context: APIRequestContext;
        conversations: Resource$Conversations;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Request to authenticate a conversation.
     */
    export interface Schema$BusinessMessagesAuthenticationRequest {
        /**
         * Details for authentication via OAuth.
         */
        oauth?: Schema$BusinessMessagesAuthenticationRequestOauth;
    }
    /**
     * Details for authentication via OAuth.
     */
    export interface Schema$BusinessMessagesAuthenticationRequestOauth {
        /**
         * Required. The [ID](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/) of the application that asks for authorization.
         */
        clientId?: string | null;
        /**
         * Required. The [code challenge](https://tools.ietf.org/html/rfc7636#section-4.2) used to exchange access tokens.
         */
        codeChallenge?: string | null;
        /**
         * Required. An array that specifies the [scopes](https://oauth.net/2/scope/) of the request.
         */
        scopes?: string[] | null;
    }
    /**
     * Card content.
     */
    export interface Schema$BusinessMessagesCardContent {
        /**
         * Optional. Description of the card. Maximum 2000 characters.
         */
        description?: string | null;
        /**
         * Optional. Media to include in the card.
         */
        media?: Schema$BusinessMessagesMedia;
        /**
         * Optional. List of suggestions to include in the card. Maximum 4 suggestions.
         */
        suggestions?: Schema$BusinessMessagesSuggestion[];
        /**
         * Optional. Title of the card. Maximum 200 characters.
         */
        title?: string | null;
    }
    /**
     * Carousel of cards.
     */
    export interface Schema$BusinessMessagesCarouselCard {
        /**
         * The list of contents for each card in the carousel. A carousel can have a minimum of 2 cards and a maximum 10 cards.
         */
        cardContents?: Schema$BusinessMessagesCardContent[];
        /**
         * The width of the cards in the carousel.
         */
        cardWidth?: string | null;
    }
    /**
     * Message containing the content information.
     */
    export interface Schema$BusinessMessagesContentInfo {
        /**
         * Text describing the details about the media for accessibility purposes.
         */
        altText?: string | null;
        /**
         * Publicly reachable URL of the file. The platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. Maximum 5 MB. Supported content types: image/jpeg, image/jpg, image/png
         */
        fileUrl?: string | null;
        /**
         * If set, the platform fetches the file and thumbnail from the specified URLs, even if the platform has cached copies of the file (and/or of the thumbnail).
         */
        forceRefresh?: boolean | null;
        /**
         * Optional. Publicly reachable URL of the thumbnail. If you don't provide a thumbnail URL, the platform displays a blank placeholder thumbnail until the user's device downloads the file. Maximum 25 KB. Supported content types: image/jpeg, image/jpg, image/png
         */
        thumbnailUrl?: string | null;
    }
    /**
     * Opens the user's default dialer app with the specified phone number filled in.
     */
    export interface Schema$BusinessMessagesDialAction {
        /**
         * Required. The specified phone number, in [RFC 3966](https://tools.ietf.org/html/rfc3966) format. For example, "+1-201-555-0123".
         */
        phoneNumber?: string | null;
    }
    /**
     * An event in a conversation between an agent and a user.
     */
    export interface Schema$BusinessMessagesEvent {
        /**
         * The type of the event.
         */
        eventType?: string | null;
        /**
         * The name of the event, as set by Business Messages. Resolves to "conversations/{conversationId\}/events/{eventId\}", where {conversationId\} is the unique ID for the conversation and {eventId\} is the unique ID for the event.
         */
        name?: string | null;
        /**
         * Details about the representative (human or chatbot) that sent the event.
         */
        representative?: Schema$BusinessMessagesRepresentative;
    }
    /**
     * An image.
     */
    export interface Schema$BusinessMessagesImage {
        /**
         * Information about an image, including the URL of the image and the URL of the image's thumbnail.
         */
        contentInfo?: Schema$BusinessMessagesContentInfo;
    }
    /**
     * When tapped, sends a request for a live agent to join the conversation.
     */
    export interface Schema$BusinessMessagesLiveAgentRequest {
    }
    /**
     * A media file within a rich card.
     */
    export interface Schema$BusinessMessagesMedia {
        /**
         * Information about a file, including the URL of the file and the URL of the file's thumbnail.
         */
        contentInfo?: Schema$BusinessMessagesContentInfo;
        /**
         * The height of the media within a rich card.
         */
        height?: string | null;
    }
    /**
     * A message in a conversation between an agent and a user.
     */
    export interface Schema$BusinessMessagesMessage {
        /**
         * Optional. If `true`, indicates that the message contains rich text. If the message contains invalid formatting, Business Messages returns an error.
         */
        containsRichText?: boolean | null;
        /**
         * Optional. Fallback text that displays if the user's device doesn't support the message type or content.
         */
        fallback?: string | null;
        /**
         * Image message.
         */
        image?: Schema$BusinessMessagesImage;
        /**
         * Required. The unique identifier of the message, assigned by the agent. If a message attempts to use the same `messageId` as a previous message, Business Messages returns an `ALREADY_EXISTS` error.
         */
        messageId?: string | null;
        /**
         * The name of the message, as set by Business Messages. Resolves to "conversations/{conversationId\}/messages/{messageId\}", where {conversationId\} is the unique ID for the conversation and {messageId\} is the unique ID for the message.
         */
        name?: string | null;
        /**
         * Details about the representative (human or chatbot) that sent the message.
         */
        representative?: Schema$BusinessMessagesRepresentative;
        /**
         * Rich Card message.
         */
        richCard?: Schema$BusinessMessagesRichCard;
        /**
         * A list of suggested replies that appear as a list of suggestion chips following the associated message. Maximum 13 suggestions. The chips only display when the associated message is the most recent message within the conversation (including both agent and user messages). The user can tap a suggested reply to send the text reply to the agent.
         */
        suggestions?: Schema$BusinessMessagesSuggestion[];
        /**
         * Text message.
         */
        text?: string | null;
    }
    /**
     * Opens the specified URL.
     */
    export interface Schema$BusinessMessagesOpenUrlAction {
        /**
         * URL
         */
        url?: string | null;
    }
    /**
     * Details about the representative (human or chatbot) that sent the message.
     */
    export interface Schema$BusinessMessagesRepresentative {
        /**
         * Optional. The representative's avatar image, as a publicly available URL. Displays as a circle. Avatar images don't support personal information, such as depictions of representatives in photographs or illustrations. Use images that don't identify individuals, such as icons, logos, or fictitious illustrations. After an avatar image is used in a message, the image can't be modified or deleted. Images must be 1024x1024 px and have a maximum files size of 50 KB.
         */
        avatarImage?: string | null;
        /**
         * Optional. Name of the representative.
         */
        displayName?: string | null;
        /**
         * Required. The type of representative.
         */
        representativeType?: string | null;
    }
    /**
     * A standalone rich card or a carousel of rich cards sent from the agent to the user.
     */
    export interface Schema$BusinessMessagesRichCard {
        /**
         * Carousel of cards.
         */
        carouselCard?: Schema$BusinessMessagesCarouselCard;
        /**
         * Standalone card.
         */
        standaloneCard?: Schema$BusinessMessagesStandaloneCard;
    }
    /**
     * Standalone card.
     */
    export interface Schema$BusinessMessagesStandaloneCard {
        /**
         * Card content.
         */
        cardContent?: Schema$BusinessMessagesCardContent;
    }
    /**
     * When tapped, initiates the corresponding native action on the device.
     */
    export interface Schema$BusinessMessagesSuggestedAction {
        /**
         * Opens the user's default dialer app.
         */
        dialAction?: Schema$BusinessMessagesDialAction;
        /**
         * Opens the specified URL.
         */
        openUrlAction?: Schema$BusinessMessagesOpenUrlAction;
        /**
         * The string that the agent receives when a user taps the suggested action.
         */
        postbackData?: string | null;
        /**
         * Text that is shown in the suggested action. Maximum 25 characters.
         */
        text?: string | null;
    }
    /**
     * When tapped, sends the text reply back to the agent.
     */
    export interface Schema$BusinessMessagesSuggestedReply {
        /**
         * The string that the agent receives when a user taps the suggested reply.
         */
        postbackData?: string | null;
        /**
         * Text that is shown in the suggested reply and sent to the agent when the user taps it. Maximum 25 characters.
         */
        text?: string | null;
    }
    /**
     * A suggestion within a chip list.
     */
    export interface Schema$BusinessMessagesSuggestion {
        /**
         * A suggested action that initiates a native action on the device.
         */
        action?: Schema$BusinessMessagesSuggestedAction;
        /**
         * A request to start authentication flow.
         */
        authenticationRequest?: Schema$BusinessMessagesAuthenticationRequest;
        /**
         * A request to have a live agent join the conversation.
         */
        liveAgentRequest?: Schema$BusinessMessagesLiveAgentRequest;
        /**
         * A suggestion for the user to reply with specified text.
         */
        reply?: Schema$BusinessMessagesSuggestedReply;
    }
    /**
     * A survey to measure customer satisfaction.
     */
    export interface Schema$BusinessMessagesSurvey {
        /**
         * The name of the survey, as set by Business Messages. Resolves to "conversations/{conversationId\}/surveys/{surveyId\}", where {conversationId\} is the unique ID for the conversation and {surveyId\} is the unique ID for the survey.
         */
        name?: string | null;
    }
    export class Resource$Conversations {
        context: APIRequestContext;
        events: Resource$Conversations$Events;
        messages: Resource$Conversations$Messages;
        surveys: Resource$Conversations$Surveys;
        constructor(context: APIRequestContext);
    }
    export class Resource$Conversations$Events {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an event in a conversation.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businessmessages.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businessmessages = google.businessmessages('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businessmessages.conversations.events.create({
         *     // The unique identifier of the event, assigned by the agent. If an event has the same `eventId` as a previous event in the conversation, Business Messages returns an `ALREADY_EXISTS` error.
         *     eventId: 'placeholder-value',
         *     // Required. The conversation that contains the message. Resolves to "conversations/{conversationId\}".
         *     parent: 'conversations/my-conversation',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "eventType": "my_eventType",
         *       //   "representative": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "eventType": "my_eventType",
         *   //   "representative": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Conversations$Events$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Conversations$Events$Create, options?: MethodOptions): GaxiosPromise<Schema$BusinessMessagesEvent>;
        create(params: Params$Resource$Conversations$Events$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Conversations$Events$Create, options: MethodOptions | BodyResponseCallback<Schema$BusinessMessagesEvent>, callback: BodyResponseCallback<Schema$BusinessMessagesEvent>): void;
        create(params: Params$Resource$Conversations$Events$Create, callback: BodyResponseCallback<Schema$BusinessMessagesEvent>): void;
        create(callback: BodyResponseCallback<Schema$BusinessMessagesEvent>): void;
    }
    export interface Params$Resource$Conversations$Events$Create extends StandardParameters {
        /**
         * The unique identifier of the event, assigned by the agent. If an event has the same `eventId` as a previous event in the conversation, Business Messages returns an `ALREADY_EXISTS` error.
         */
        eventId?: string;
        /**
         * Required. The conversation that contains the message. Resolves to "conversations/{conversationId\}".
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BusinessMessagesEvent;
    }
    export class Resource$Conversations$Messages {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Sends a message from an agent to a user. If a conversation doesn't exist or an agent tries to send a message in a conversation that it isn't authorized to participate in, returns a `PERMISSION DENIED` error.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businessmessages.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businessmessages = google.businessmessages('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businessmessages.conversations.messages.create({
         *     // Optional. A flag to send the specified fallback text instead of other message content. Only available to agents that aren't launched. If the flag is true and fallback text isn't specified, Business Messages returns an error.
         *     forceFallback: 'placeholder-value',
         *     // Required. The conversation that contains the message. Resolves to "conversations/{conversationId\}".
         *     parent: 'conversations/my-conversation',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "messageId": "my_messageId",
         *       //   "text": "my_text",
         *       //   "image": {},
         *       //   "richCard": {},
         *       //   "representative": {},
         *       //   "suggestions": [],
         *       //   "fallback": "my_fallback",
         *       //   "containsRichText": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "messageId": "my_messageId",
         *   //   "text": "my_text",
         *   //   "image": {},
         *   //   "richCard": {},
         *   //   "representative": {},
         *   //   "suggestions": [],
         *   //   "fallback": "my_fallback",
         *   //   "containsRichText": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Conversations$Messages$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Conversations$Messages$Create, options?: MethodOptions): GaxiosPromise<Schema$BusinessMessagesMessage>;
        create(params: Params$Resource$Conversations$Messages$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Conversations$Messages$Create, options: MethodOptions | BodyResponseCallback<Schema$BusinessMessagesMessage>, callback: BodyResponseCallback<Schema$BusinessMessagesMessage>): void;
        create(params: Params$Resource$Conversations$Messages$Create, callback: BodyResponseCallback<Schema$BusinessMessagesMessage>): void;
        create(callback: BodyResponseCallback<Schema$BusinessMessagesMessage>): void;
    }
    export interface Params$Resource$Conversations$Messages$Create extends StandardParameters {
        /**
         * Optional. A flag to send the specified fallback text instead of other message content. Only available to agents that aren't launched. If the flag is true and fallback text isn't specified, Business Messages returns an error.
         */
        forceFallback?: boolean;
        /**
         * Required. The conversation that contains the message. Resolves to "conversations/{conversationId\}".
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BusinessMessagesMessage;
    }
    export class Resource$Conversations$Surveys {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a customer satisfaction survey in a conversation. If an agent sends multiple surveys in the same conversation within 24 hours, surveys after the first return a `RESOURCE_EXHAUSTED` error. If the client doesn't support the survey feature, survey returns a `FAILED_PRECONDITION` error.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businessmessages.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businessmessages = google.businessmessages('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businessmessages.conversations.surveys.create({
         *     // Required. The conversation that contains the survey. Resolves to "conversations/{conversationId\}".
         *     parent: 'conversations/my-conversation',
         *     // The unique identifier of the survey, assigned by the agent. If a survey attempts to use the same `surveyId` as a previous survey, Business Messages returns an `ALREADY_EXISTS` error.
         *     surveyId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Conversations$Surveys$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Conversations$Surveys$Create, options?: MethodOptions): GaxiosPromise<Schema$BusinessMessagesSurvey>;
        create(params: Params$Resource$Conversations$Surveys$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Conversations$Surveys$Create, options: MethodOptions | BodyResponseCallback<Schema$BusinessMessagesSurvey>, callback: BodyResponseCallback<Schema$BusinessMessagesSurvey>): void;
        create(params: Params$Resource$Conversations$Surveys$Create, callback: BodyResponseCallback<Schema$BusinessMessagesSurvey>): void;
        create(callback: BodyResponseCallback<Schema$BusinessMessagesSurvey>): void;
    }
    export interface Params$Resource$Conversations$Surveys$Create extends StandardParameters {
        /**
         * Required. The conversation that contains the survey. Resolves to "conversations/{conversationId\}".
         */
        parent?: string;
        /**
         * The unique identifier of the survey, assigned by the agent. If a survey attempts to use the same `surveyId` as a previous survey, Business Messages returns an `ALREADY_EXISTS` error.
         */
        surveyId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BusinessMessagesSurvey;
    }
    export {};
}
//# sourceMappingURL=v1.d.ts.map