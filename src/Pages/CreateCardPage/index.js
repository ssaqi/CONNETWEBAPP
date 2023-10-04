import React from 'react'
import Createcardone from './CreatecardComponet/CreateCardone/Index'
import NineComponent from '../Home/Homecomponets/NineComponet'
import Header from '../../Componets/Header'
import Footer from '../../Componets/Footer'
import EightComponent from '../Home/Homecomponets/EigthComponet'
import Cardcomponent2 from './CreatecardComponet/cardCom2'
import Cardcomponent3 from './CreatecardComponet/cardCom3'
import Cardcomponent4 from './CreatecardComponet/cardCom4'
import Cardcomponent5 from './CreatecardComponet/cardCom5'
function CreateCard() {
  return (
    <div>
      <Header/>
      <Createcardone/>
      <Cardcomponent2/>
      <Cardcomponent3/>
      <Cardcomponent4/>
      <Cardcomponent5/>
      <EightComponent/>
      <NineComponent/>
      <Footer/>
    </div>
  )
}

export default CreateCard
