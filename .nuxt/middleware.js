const middleware = {}

middleware['generalAuth'] = require('../middleware/generalAuth.js')
middleware['generalAuth'] = middleware['generalAuth'].default || middleware['generalAuth']

middleware['generalControls'] = require('../middleware/generalControls.js')
middleware['generalControls'] = middleware['generalControls'].default || middleware['generalControls']

middleware['userAuth'] = require('../middleware/userAuth.js')
middleware['userAuth'] = middleware['userAuth'].default || middleware['userAuth']

export default middleware
