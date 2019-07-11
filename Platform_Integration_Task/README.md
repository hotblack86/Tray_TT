**Implementation & Sales Engineer Candidate Test**
---

**Requirements**
The Tray.IO integration will take the opportunity notification as a webhook. This will be sent to the Slack API as a POST request in JSON format.
The integration will return the notification from the Slack API and post a message in the relevant Slack channel. Relevant in this case relates to the location of the sales team (UK, US, EU) and is determined by the 'country' attribute in the Webhook.


**Overview**

**Technicalities**

List of Slack API methods that support JSON posting used for the integration:

- api.test
  - Check the API has been called correctly to avoid unwanted errors

- auth.test
  - To make sure no one other than the client is trying to post to the Slack channels.

- chat.postMessage
  - Posts the notification as a Slack message.

- chat.delete
  - Deletes the message.

Methods that could be used for additional, hypothetical requirements:

- chat.update
  - Updates the message if client wanted to edit the notification (i.e alter the close date or amount) rather than having to send a new notification.

- pins.add
  - Pins the message to the channel. This could be useful to improve message visibility. Also prevents deletion of message by the free Slack plan.

reactions.add
  - Allows people to react to the message with emoji.


**Questions for Client**