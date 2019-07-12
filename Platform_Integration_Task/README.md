**Implementation & Sales Engineer Candidate Test**
---

**Requirements**

The Tray.IO integration will take the opportunity notification as a webhook. This will be sent to the Tray.IO platform as a POST request in JSON format.

The integration will store all the data from the JSON post in a database. The relevant attributes will be retrieved from the db  ready to be used by Slack.


The Slack API will then post the message in the relevant Slack channel. Relevant in this case relates to the location of the sales team (UK, US, EU) and is determined by the 'country' attribute in the Webhook.


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
    - Updates the message.

- pins.add
    - Pins the message to the channel. This could be useful to improve message visibility. Also prevents deletion of message by the free Slack plan.

- reactions.add
    - Allows people to react to the message with emoji.


**Questions for Client**

- Firstly, are you fully satisfied that this integration meets your requirements?

- Can Tray provide clarification on any aspect of the integration?
  - e.g Client might want reassurance that the notification is posted to the correct channel.


- Are there any additional requirements that you might want?
  - e.g Client might want to have the ability to update the notification (e.g alter the close date or amount) rather than having to send a new notification. This could be implemented using the chat.update method referrenced above.