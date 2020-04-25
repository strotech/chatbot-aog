//const projectId = 'review-desk'
//const keyFilename = 'auth/review-desk-service.json'
const { Logging } = require('@google-cloud/logging')

const logging = new Logging({projectId:"review-desk"});
//const logging = new Logging({projectId,keyFilename});
// eslint-disable-next-line no-unused-vars
module.exports = async function logger (eventInfo, context = {}, req = undefined) {

    // if (process.env.NODE_ENV !== 'production') {
    //     // eslint-disable-next-line no-unused-vars
    //     return new Promise((resolve, reject) => {
    //         console.error(eventInfo, context)
    //         return resolve()
    //     })
    // }

    const log = logging.log('chatbotErrors')

    const metadata = {
        severity: 'ERROR',
        // resource: {
        //     type: 'cloud_function',
        //     labels: {
        //         function_name: process.env.FUNCTION_NAME,
        //         project: process.env.GCLOUD_PROJECT,
        //         region: process.env.FUNCTION_REGION
        //     }
        // }
        resource:{
            type:'global',
        }
    };


    const errorEvent = {

        event: 'ERROR',
        value: 'foo-bar-baz', 
        message: eventInfo.stack,        
    //    context: context
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

