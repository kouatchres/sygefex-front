import { Query } from 'react-apollo';
import PropTypes from 'prop-types'
import { meQuery } from '../components/queries&Mutations&Functions/Queries'

const User = props => (

    <Query  {...props} query={meQuery} >
        {payload => props.children(payload)}
    </Query>
)

User.propTypes = {
    children: PropTypes.func.isRequired,
}

export default User;