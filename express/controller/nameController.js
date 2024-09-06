const checkName = (req, res) => {
    const { name, family } = req.body;
    console.log(req.body);

    if (name !== 'parsa') {
        return res
            .status(405)
            .json({ 'error': 'name is wrong' })
    } else {
        return res.status(201).json({ 'msg': 'success' })
    }
}

export default checkName