const URL = require ('../models/url')
const shortid = require('shortid');

async function handleGenerateShortUrl(req,res) {
const shortId = shortid.generate()
const redirectUrl = req.body.url
if(!redirectUrl) return res.status(400).json({error : "url is required"})
const result = await URL.create(
    {
        shortId : shortId,
        redirectUrl : redirectUrl
    }
)
return res.json({shortId : result.shortId})
}

async function handleRedirectByShortId(req,res) {
    const shortId = req.params.shortId
    const result = await URL.findOne({
        shortId
    })
    console.log(result)
    return res.redirect(result.redirectUrl)
}

module.exports = {handleGenerateShortUrl, handleRedirectByShortId}