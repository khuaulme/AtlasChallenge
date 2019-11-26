# AtlasChallenge
Atlas Challenge for AWS Re:Invent 2019

The Challenge Stitch Application will automatically make calls on a per minute Stitch scheduled trigger to several collections in the dump restore data set:

- sports.players
- social.linkedInUsers
- sample_training.companies
- sample_airbnb.listingsAndReviews

These calls will result in a load to monitor and profile in Atlas, as well as suggested indexes in Atlas' Performance Advisor.
![Screenshot](https://user-images.githubusercontent.com/15270412/69666842-88667480-1052-11ea-8c8d-023961c70a52.png)

