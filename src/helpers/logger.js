const projectId = 'review-desk'
const keyFilename = 'auth/review-desk-service.json'
const { Logging } = require('@google-cloud/logging')

const logging = new Logging({projectId,keyFilename});
// eslint-disable-next-line no-unused-vars
module.exports = async function logger (eventInfo, context = {}, req = undefined) {

    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-unused-vars
        return new Promise((resolve, reject) => {
            console.error(eventInfo, context)
            return resolve()
        })
    }

    const log = logging.log('chatbot-errors')

    const metadata = {
        severity: 'ERROR',
        resource:{
            type:'global'
        }
    };

    // can be any json payload.  No specific attributes required
    const errorEvent = {
        event: 'ERROR',
        message: eventInfo.stack,        
        context: context
    }


    

    return new Promise((resolve, reject) => {
        log.write(log.entry(metadata, errorEvent), (error) => {
            if (error) {
                return reject(error)
            }
            return resolve()
        })
    })
}

