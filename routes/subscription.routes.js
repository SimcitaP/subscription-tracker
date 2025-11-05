import { Router } from 'express';
import { createSubscription } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  // Handle fetching all subscriptions
  res.send('Get all subscriptions');
});

subscriptionRouter.get('/:id', (req, res) => {
  // Handle fetching a specific subscription by ID
  res.send(`Get subscription with ID: ${req.params.id}`);
});

subscriptionRouter.post('/', createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
  // Handle updating a specific subscription by ID
  res.send(`Update subscription with ID: ${req.params.id}`);
});

subscriptionRouter.delete('/:id', (req, res) => {
  // Handle deleting a specific subscription by ID
  res.send({title: `Delete subscription with ID: ${req.params.id}`});
});

subscriptionRouter.get('/user/:userId', (req, res) => {
  // Handle fetching subscriptions for a specific user
  res.send({title: `Get subscriptions for user with ID: ${req.params.userId}`});
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
  // Handle canceling a specific subscription by ID
  res.send({title: `Cancel subscription with ID: ${req.params.id}`});
});

subscriptionRouter.get('upcoming-renewals', (req, res) => {
  // Handle fetching subscriptions with upcoming renewals
  res.send({title: 'Get subscriptions with upcoming renewals'});
});

export default subscriptionRouter;