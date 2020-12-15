/** @jsx jsx */
import { Location } from '@reach/router'
import { Pagination } from '@theme-ui/sidenav'
import { jsx } from 'theme-ui'
import Sidenav from '../sidebar.mdx'

export default props => (
  <Location>
    {({ location }) => (
      <Sidenav
        pathname={location.pathname}
        sx={{
          py: 4,
        }}
        components={{
          wrapper: Pagination,
        }}
      />
    )}
  </Location>
)