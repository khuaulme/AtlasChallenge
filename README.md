# AtlasChallenge
Atlas Challenge for AWS Re:Invent 2019

The Challenge Stitch Application will automatically make calls on a per minute Stitch scheduled trigger to several collections in the dump restore data set:

- sports.players
- social.linkedInUsers
- sample_training.companies
- sample_airbnb.listingsAndReviews

These calls will result in a load to monitor and profile in Atlas, as well as suggested indexes in Atlas' Performance Advisor.
