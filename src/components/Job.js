import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Divider from './Divider'

const JobWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  max-width: 1110px;
  margin-top: 24px;
  padding: 32px 40px;
  box-shadow: 0px 15px 20px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  min-width: 1110px;
  border-left: ${props =>
    props.featured ? `5px solid ${props.theme.colors.primary}` : ''};
`
const Avatar = styled.img`
  border-radius: 9999px;
  height: 88px;
  width: 88px;
  margin-right: 24px;
`
const Label = styled.span`
  background-color: #000000;
  border-radius: 12px;
  font-size: 11px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  background-color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.black};
  padding: 8px 8px 4px 8px;
  margin-right: ${props => (props.variant === 'primary' ? '8px' : '')};
`
const Position = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 8px 0px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
const Company = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-right: 16px;
`
const MoreInfo = styled.div`
  color: ${props => props.theme.colors.neutral[2]};
  font-weight: ${props => props.theme.typography.fontWeight.normal};
  font-size: 15px;
  display: flex;
  align-items: center;
  span {
    line-height: 24px;
  }
`
const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    background-color: ${props => props.theme.colors.neutral[1]};
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin-left: 16px;
    padding: 4px 8px 4px 8px;
    border-radius: 4px;
    font-size: 13px;
    line-height: 24px;
  }
`

const Job = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <JobWrapper featured={featured}>
      <Flex>
        <Avatar src={logo} />
        <Flex direction="column" align="flex-start" justify="space-between">
          <Flex>
            <Company>{company}</Company>
            {isNew && <Label variant="primary">NEW!</Label>}
            {featured && <Label>FEATURED</Label>}
          </Flex>
          <Position>{position}</Position>
          <Flex>
            <MoreInfo>
              <span>{postedAt}</span>
              <Divider />
              <span>{contract}</span> <Divider />
              <span>{location}</span>
            </MoreInfo>
          </Flex>
        </Flex>
      </Flex>
      <Tags>
        {[role, level, ...languages, ...tools].map(item => (
          <span>{item}</span>
        ))}
      </Tags>
    </JobWrapper>
  )
}

export default Job
