import ATCSModel from '../models/atcsModel.js'

const ATCSController = {
    post: async (req, res) => {
        const {nama_atcs, lat, long, id_kota, stream_url, is_monitoring} = req.body
        try {
            const atcs = await ATCSModel.create({
                nama_atcs, lat, long, id_kota, stream_url, is_monitoring
            })

            res.json({
                status: 201,
                data: atcs.dataValues
            }).status(201)
        } catch (e) {
            res.json({
                status: 500,
                message: e.message
            }).status(500)
        }
    }
}

export default ATCSController
