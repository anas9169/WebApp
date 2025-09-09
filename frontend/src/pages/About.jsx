import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>The Gavai Swad Agro Products P Limited (Gavai Swad) is a company founded in 2020 during the
lockdown period when the food services were not available in offline mode for window shopping.
The vision behind starting “Gavai Swad” is to provide the real taste of India and the real products
made out of desi raw material. Nowadays, getting Organic fruits and vegetables is next to impossible
since adulteration has become a common practice.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cupiditate quo? Inventore placeat laudantium maxime itaque harum natus, praesentium, animi assumenda culpa cum maiores laboriosam pariatur suscipit voluptate, commodi unde.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>We, at Gavai Swad treat nature as it
should be and provide a wide variety of the freshest possible products free from harmful pesticides
and chemicals, that disrupt our physical health and mental wellbeing.
We offer a range of products like: Sugarcane sirka, pickles, murabba, jaggery products to our
customers freshly made without using any chemicals  pesticides. Since now all of us are
getting more internet  technology savvy and we all want the services at our doorstep.</p>
        </div>

      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolore deserunt nam tempore, dolor officiis dolorem non obcaecati architecto corporis ipsum? Eius magnam earum fugit cum temporibus in quo.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolore deserunt nam tempore, dolor officiis dolorem non obcaecati architecto corporis ipsum? Eius magnam earum fugit cum temporibus in quo.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolore deserunt nam tempore, dolor officiis dolorem non obcaecati architecto corporis ipsum? Eius magnam earum fugit cum temporibus in quo.</p>
        </div>



      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
