import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    let responseMessage: string

    if (req.body && req.body.message) {

        context.bindings.EventMeshMessage = req.body.message

         responseMessage = `This HTTP triggered function executed successfully. Message was: ${req.body.message}.`;

    }
    else {
        responseMessage = "No message to be sent"
    }

    context.res = {
        body: responseMessage
    }
}

export default httpTrigger