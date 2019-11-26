# AtlasChallenge
Atlas Challenge for AWS Re:Invent 2019

The Challenge Stitch Application will automatically make calls on a per minute Stitch scheduled trigger to several collections in the dump restore data set:

- sports.players
- social.linkedInUsers
- sample_training.companies
- sample_airbnb.listingsAndReviews

These calls will result in a load to monitor and profile in Atlas, as well as suggested indexes in Atlas' Performance Advisor.
![Screenshot](https://user-images.githubusercontent.com/15270412/69666842-88667480-1052-11ea-8c8d-023961c70a52.png)

## Prerequisites
MongoDB Atlas programmatic API Key: http://docs.atlas.mongodb.com/configure-api-access/#programmatic-api-keys
A properly installed copy of stitch-cli that has been added to your system PATH.

## Set-Up
Empty stitch.json
Alter config.json - to AtlasChallenge__  and remove first id: line

stitch-cli import  --strategy=merge 

stitch-cli secrets add --name=challenge_sh --value=c2fc601a087cedd075751792c6df45c0

stitch-cli import  --strategy=replace

Enable Hosting
Replace app Stitch app name in line 85 of index.html
Save and import
Disable Drafts from Deploy Configuration
Change Values: Competitor __


Later 
Configure trigger0 to input - to test on insert Atlas.superheroes insertion
Open index.html to test

_________________________

To reset: delete trigger0

