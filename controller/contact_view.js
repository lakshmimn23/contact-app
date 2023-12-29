const index = async (req,res) => {
    try {
        res.render('index.pug')
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const add = async (req,res) => {
    try {
        res.render('create.pug')
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const edit = async (req,res) => {
    try {
        res.render('update.pug')
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = { index, add, edit }