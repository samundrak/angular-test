module.exports =
{
    partials: function (req, res) {
        "use strict";
        let view = req.params.views + '/partials/' + req.params.partials;
        console.log(view)
        return res.render(view);
    }
}