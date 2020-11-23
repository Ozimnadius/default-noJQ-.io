const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "1200px",
        fields: "20px",
    },
    breakPoints: {
        lg: {
            width: "1199.98px",
            fields: "20px",
        },
        md: {
            width: "991.98px",
            fields: "20px",
        },
        sm: {
            width: "767.98px",
            fields: "10px",
            offset: "10px",
        },
        xs: {
            width: "575.98px",
            fields: "10px",
            offset: "10px",
        }
    },
});