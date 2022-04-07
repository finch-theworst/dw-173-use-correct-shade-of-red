import React from 'react'
import Image from 'next/image'

import { Grid, Box, Flex, Text, Link } from '@chakra-ui/react'

const SOCIALS = [
  {
    img: '/icons/medium.png',
    alt: 'medium',
    href: 'https://medium.com/bankless-dao',
  },
  {
    img: '/icons/mirror.png',
    alt: 'mirror',
    href: 'https://banklessdao.mirror.xyz/',
  },
  {
    img: '/icons/union.png',
    alt: 'union',
    href: '#',
  },
  {
    img: '/icons/twitter.png',
    alt: 'twitter',
    href: 'https://twitter.com/banklessDAO',
  },
  {
    img: '/icons/discord.png',
    alt: 'discord',
    href: 'https://discord.com/invite/bankless',
  },
  {
    img: '/icons/notion.png',
    alt: 'notion',
    href: '#',
  },
  {
    img: '/icons/icon-7.png',
    alt: 'path',
    href: '#',
  },
  {
    img: '/icons/etherscan-logo.png',
    alt: 'etherscan',
    href: 'https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  },
  {
    img: '/icons/instagram.png',
    alt: 'instagram',
    href: 'https://www.instagram.com/banklessdao/?hl=en',
  },
  {
    img: '/icons/group-15.png',
    alt: 'alt',
    href: '#',
  },
]

const LINKS = [
  {
    text: 'Join Olympus Pro',
    href: 'https://pro.olympusdao.finance/#/bond',
  },
  {
    text: 'BANK',
    href: 'https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  },
  {
    text: 'Wiki',
    href: 'https://dyor-crypto.fandom.com/wiki/Bankless_DAO_(BANK)',
  },
  {
    text: 'Privacy',
    href: 'https://forum.bankless.community/privacy',
  },
  {
    text: 'Forum',
    href: 'https://forum.bankless.community/',
  },
  {
    text: 'Github',
    href: 'https://github.com/BanklessDAO',
  },
  {
    text: 'Vote',
    href: 'https://snapshot.org/#/banklessvault.eth',
  },
  {
    text: 'TwitchTV',
    href: 'https://www.twitch.tv/banklessdao',
  },
]

class Footer extends React.Component {
  render() {
    return (
      <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 2, md: 6 }}
          width='80%'
          borderTop='1px solid red'
          marginTop={{ base: 8, lg: 16 }}
          paddingY={{ base: 8, lg: 8 }}
          paddingX={{ base: 4, lg: 8 }}>
            
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems={{base: 'center', md: 'start'}}
            rowGap={4}>
            <Image
              src='/icons/bankless-square.jpg'
              objectFit='contain'
              height={150}
              width={150}
              alt='bankless-logo'
            />

            <Text fontSize='xl'>
              A decentralized autonomous organization that acts as a steward of
              the Bankless Movement progressing the world towards a future of
              greater freedom.
            </Text>

            <Flex justifyContent='space-between' marginTop={{ base: 0, lg: 4}}>
              {SOCIALS.map((_social, idx) => {
                return (
                  <Link href={_social.href} key={`social-${idx}`} margin={2}>
                    <Image
                      src={_social.img}
                      alt={_social.alt}
                      width={20}
                      height={20}
                    />
                  </Link>
                )
              })}
            </Flex>
          </Flex>

          <Box marginTop={{ base: 8, lg: 24 }}>
            <Grid
              gridTemplateColumns='1fr 1fr'
              rowGap='2vh'
              columnGap={12}
              paddingLeft={{ base: 0, lg: 8 }}
              paddingTop={{ base: 4, lg: 12 }}
              textAlign={{ base: 'center', lg: 'left' }}>
              {LINKS.map((_link, idx) => {
                return (
                  <Link href={_link.href} key={`link-${idx}`} fontSize={{ base: 'md', md: '2xl' }}>{_link.text}</Link>
                )
              })}
            </Grid>
          </Box>
        </Grid>

        <Text
          fontSize='m'
          color='rgba(255, 255, 255, 0.56);'
          marginY={2}
          >
          GoBankless © 2022. All Rights Reserved.
        </Text>
      </Flex>
    )
  }
}

export default Footer
