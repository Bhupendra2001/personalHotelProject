const router = require('express').Router()
const { register , login } = require('../controllers/userController')
const { createHotel , deleteHotel , updateHotel , getAllHotel , getHotel } = require('../controllers/hotelController')
const { verifyToken , verifyTokenAndAuthorization , verifyTokenAndAdmin } = require('../middleware/auth')
const {createRoom , getRoom , getAllRoomByhotelId , updateRoom , deleteRoom } = require('../controllers/roomController')
const {  updatebookedRoom , deleteBookedRoom, bookRoom} = require('../controllers/bookController')


//---------------Users---Apis----------//

router.post('/register', register)
router.post('/login', login)

//-------------hotel--Apis---------------------//

router.post('/hotels/users/:userId' , createHotel)
router.get('/hotels' , getAllHotel)
router.get('/hotels/:id' , getHotel)
router.put('/hotels/:id/users/:userId' ,verifyTokenAndAdmin ,updateHotel)
router.delete('/hotels/:id/users/:userId' , deleteHotel)


//------------------Rooms--Apis------------------//


router.post('/rooms/hotel/:hotelId/users/:userId' , createRoom)
router.get('/rooms/:id/hotel/:hotelId/users/:userId' , getRoom)
router.get('/rooms/:id/hotel/:hotelId/users/:userId' , getAllRoomByhotelId)
router.put('/rooms/:id/hotel/:hotelId/users/:userId' , updateRoom)
router.delete('/rooms/:id/hotel/:hotelId/users/:userId' , deleteRoom)

//-------------------------BookingRoom---Apis-------------//


router.post('/bookrooms/rooms/:roomId/users/:userId' ,bookRoom )
router.put('/bookrooms/rooms/:roomId/users/:userId', updatebookedRoom )
router.delete('/bookrooms/rooms/:roomId/users/:userId' ,deleteBookedRoom ) 

//----------------------coupon---Apis-------------------//




//----------------------happy-ending-------------------------//

module.exports = router