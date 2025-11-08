import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { serve } = require('@upstash/workflow')

export const sendReminders = serve(
    async (context) => {
        // Your workflow logic here
        const { subscriptionId } = context.requestPayload;
        const subscription = await fetchSubscription(context, subscriptionId);
        console.log(`Sending reminder for subscription: ${subscription.name}, due on ${subscription.dueDate}`);
    }
);

const fetchSubscription = async (context, subscriptionId) => {
    // Simulate fetching subscription from a database
    // Replace this with actual database logic
    return await {
        id: subscriptionId,
        name: 'Sample Subscription',
        dueDate: '2024-07-01',
    };
}