# [Google's Business Messages: Node.js Client](https://github.com/google-business-communications/nodejs-businessmessages)

[Business Messages](https://developers.google.com/business-communications/business-messages/guides/learn) is a mobile conversational channel that combines entry points on Google Maps, Search, and brand websites to create rich, asynchronous messaging experiences.

This document contains an [API reference](https://developers.google.com/business-communications/business-messages/reference/rest), samples, and other resources useful to developing Node.js applications.
For additional help developing Business Messages applications, in Node.js and other languages, see our
[Business Messages quickstart](https://developers.google.com/business-communications/business-messages/guides/quickstarts/echo-agent) guide.

## Documentation

The documentation for the Business Messages API can be found [here](https://developers.google.com/business-communications/business-messages/reference/rest).

## Quickstart

### Before you begin

1.  [Register with Business Messages](https://developers.google.com/business-communications/business-messages/guides/set-up/register).
1.  Once registered, follow the instructions to [enable the APIs for your project](https://developers.google.com/business-communications/business-messages/guides/set-up/register#enable-api).

### Installing the client library

```bash
npm install businessmessages
```

### Using the client library

```javascript
// Get the Google Auth library
const {GoogleAuth} = require('google-auth-library');

// Get the BusinessMessages client library
const businessmessages = require('businessmessages');

// Set the scope for API authentication
const auth = new GoogleAuth({
  scopes: 'https://www.googleapis.com/auth/businessmessages',
});

// Initialize the Business Messages client library
const bmApi =
  new businessmessages.businessmessages_v1.Businessmessages({});

// Global used for creating an authentication token for calling the API
let authClient = false;

/**
 * Initializes the Google credentials for calling the
 * Business Messages API. This uses the default application credentials.
 */
async function initCredentials() {
  authClient = await auth.getClient();

  // Initialize auth token
  authClient.refreshAccessToken();
  await authClient.getAccessToken();
}

/**
 * Posts a message of "Hello, World!" to the Business Messages API.
 *
 * @param {string} conversationId The unique id for this user and agent.
 */
async function sendResponse(conversationId) {
  if (!authClient) {
    await initCredentials();
  }

  // Create the payload for sending a message of "Hello, World!"
  let apiParams = {
    auth: authClient,
    parent: 'conversations/' + conversationId,
    resource: {
      messageId: uuidv4(),
      representative: {
        representativeType: 'BOT',
      },
      text: 'Hello, World!',
    },
  };

  // Call the message create function using the
  // Business Messages client library
  bmApi.conversations.messages.create(apiParams,
    {auth: authClient}, (err, response) => {
    console.log(err);
    console.log(response);
  });
}

sendResponse('valid-conversation-id');
```

## Sample usage

Samples below assume a similar library initialization as shown in the [Using the client library](https://github.com/google-business-communications/nodejs-businessmessages#using-the-client-library) section.

### Sending a text message

```javascript
// Create the payload for sending a message of "Hello, World!"
let apiParams = {
  auth: authClient,
  parent: 'conversations/' + conversationId,
  resource: {
    messageId: uuidv4(),
    representative: {
      representativeType: 'BOT',
    },
    text: 'Hello, World!',
  },
};

// Call the message create function using the
// Business Messages client library
bmApi.conversations.messages.create(apiParams,
  {auth: authClient}, (err, response) => {
  console.log(err);
  console.log(response);
});
```

### Sending a text message with suggested replies and actions

```javascript
// Create the payload for sending a message of "Hello, World!" along with
// a suggested reply and two suggested actions
let apiParams = {
  auth: authClient,
  parent: 'conversations/' + conversationId,
  resource: {
    messageId: uuidv4(),
    representative: {
      representativeType: 'BOT',
    },
    text: 'Hello, World!',
    suggestions: [
      {
        reply: {
          text: 'Sample Chip',
          postbackData: 'sample_chip',
        },
      },
      {
        action: {
          text: 'URL Action',
          postbackData: 'url_action',
          openUrlAction: {
            url: 'https://www.google.com',
          },
        },
      },
      {
        action: {
          text: 'Dial Action',
          postbackData: 'dial_action',
          dialAction: {
            phoneNumber: '+12223334444',
          },
        },
      },
    ],
  },
};

// Call the message create function using the
// Business Messages client library
bmApi.conversations.messages.create(apiParams,
  {auth: authClient}, (err, response) => {
  console.log(err);
  console.log(response);
});
```

### Sending a rich card

```javascript
// Create the payload for sending a rich card
let apiParams = {
  auth: authClient,
  parent: 'conversations/' + conversationId,
  resource: {
    messageId: uuidv4(),
    representative: {
      representativeType: 'BOT',
    },
    richCard: {
      standaloneCard: {
        cardContent: {
          title: 'Business Messages!!!',
          description: 'This is an example rich card',
          media: {
            height: 'MEDIUM',
            contentInfo: {
              fileUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
              forceRefresh: false,
            },
          },
          suggestions: [
            {
              reply: {
                text: 'Sample Chip',
                postbackData: 'sample_chip',
              },
            },
          ],
        },
      },
    }
  },
};

// Call the message create function using the
// Business Messages client library
bmApi.conversations.messages.create(apiParams,
  {auth: authClient}, (err, response) => {
  console.log(err);
  console.log(response);
});
```

### Sending a carousel

```javascript
// Create the payload for sending a carousel
let apiParams = {
  auth: authClient,
  parent: 'conversations/' + conversationId,
  resource: {
    messageId: uuidv4(),
    representative: {
      representativeType: 'BOT',
    },
    richCard: {
      carouselCard: {
        cardWidth: 'MEDIUM',
        cardContents: [
          {
            title: 'Card #1',
            description: 'The description for card #1',
            suggestions: [
              {
                reply: {
                  text: 'Card #1',
                  postbackData: 'card_1'
                }
              }
            ],
            media: {
              height: 'MEDIUM',
              contentInfo: {
                fileUrl: 'https://storage.googleapis.com/kitchen-sink-sample-images/cute-dog.jpg',
                forceRefresh: 'false',
              }
            }
          },
          {
            title: 'Card #2',
            description: 'The description for card #2',
            suggestions: [
              {
                reply: {
                  text: 'Card #2',
                  postbackData: 'card_2'
                }
              }
            ],
            media: {
              height: 'MEDIUM',
              contentInfo: {
                fileUrl: 'https://storage.googleapis.com/kitchen-sink-sample-images/elephant.jpg',
                forceRefresh: 'false',
              }
            }
          }
        ]
      }
    }
  },
};

// Call the message create function using the
// Business Messages client library
bmApi.conversations.messages.create(apiParams,
  {auth: authClient}, (err, response) => {
  console.log(err);
  console.log(response);
});
```

## Samples

See the code examples to see example usage for most API features. The samples' `README.md` has instructions for running the samples.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| Echo Bot | [source code](https://github.com/google-business-communications/bm-nodejs-echo-bot) |
| Book Appointment Bot | [source code](https://github.com/google-business-communications/bm-nodejs-appointment-bot) |

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/google-business-communications/nodejs-businessmessages/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/google-business-communications/nodejs-businessmessages/LICENSE)
