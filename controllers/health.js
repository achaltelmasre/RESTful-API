

const getApiHealth = async (req, res) =>{

    return res.status(201).json({
        succes: true,
        message: "All good"
    })
}

export { getApiHealth };