import React from 'react';
import PropTypes from 'prop-types';

export const withInfiniteScroll = (Component) => 
    class WithInfniniteScroll extends React.Component {
        static propTypes = {
            onPaginatedSearch: PropTypes.func.isRequired
        }

        componentDidMount() {
            window.addEventListener('scroll', this.onScroll, false);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll, false);
        }

        onScroll = () => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.list.length) {
                this.props.onPaginatedSearch();
            }
        }

        render() {
            return <Component {...this.props} />
        }
    }