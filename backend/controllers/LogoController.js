const OpenAI = require('openai');
const Joi = require('joi');

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
});

class LogoController { 
    async generateLogos(req, res, next) {
        const schema = Joi.object({
            name: Joi.string().required(),
            type: Joi.string().required(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            const valError = new Error(error?.details[0]?.message || 'Incorrect parameters');
            valError.status = 'Invalid request';
            valError.statusCode = 500;
            next(valError);
        }

        const { name, type } = req.body;
        try {
            const response = await openai.images.generate({
                model: "dall-e-2",
                prompt: `A company logo for a company named ${name} in the ${type} industry`,
                n: 3,
                size: "256x256",
            });
            res.status(200).send({ urls: response.data });
        } catch(e) {
            const err = new Error('Failed to generate logo images');
            err.status = 'Image Generation Error';
            err.statusCode = 500;
            next(err);
        }
    }
}

module.exports = new LogoController();