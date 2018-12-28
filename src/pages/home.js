// @flow strict
import React from 'react'
import { Head } from 'react-static'

import { Menu, Hero, Speakers } from '../organisms'
import { speakers } from '../resources'

export const home = () => (
  <div>
    <Hero />
    <Menu />
    <Speakers speakers={speakers} />
    <Head>
      <title>オープンセミナー2019@広島</title>
    </Head>
  </div>
)

export default home
