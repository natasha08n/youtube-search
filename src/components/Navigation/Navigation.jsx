import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import { Selection } from '../Selection/Selection';
import { PageInfo } from '../PageInfo/PageInfo';
import {
    MIN_QUERY_LENGTH,
    MILLISECONDS_TO_WAIT,
    VIDEO_TYPES,
    PER_PAGE_VALUES
} from '../../constants/app';
import './Navigation.css';

export default class Navigation extends React.Component {
    static propTypes = {
        pageInfo: PropTypes.shape({
            perPage: PropTypes.number,
            totalCount: PropTypes.number
        }).isRequired,
        activeType: PropTypes.string.isRequired,
        searchQuery: PropTypes.string.isRequired,
        perPage: PropTypes.number.isRequired,
        updateSearchQueryAndFetch: PropTypes.func.isRequired,
        updateSettings: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            perPage: this.props.perPage,
            activeType: this.props.activeType
        };
    }

    setVideoType = e => {
        this.setState({ activeType: e.target.value });
    }

    setPerPageValue = e => {
        this.setState({ perPage: Number(e.target.value) });
    }

    render() {
        const {
            pageInfo,
            searchQuery,
            updateSearchQueryAndFetch,
            updateSettings
        } = this.props;

        const {
            perPage,
            activeType
        } = this.state;

        return (
            <section className="navigation">
                <div className="search-block">
                    <div className="title-separator">Start searching</div>
                    <DebounceInput
                        placeholder="Search..."
                        className="search"
                        minLength={MIN_QUERY_LENGTH}
                        value={searchQuery}
                        debounceTimeout={MILLISECONDS_TO_WAIT}
                        onChange={e => updateSearchQueryAndFetch(e.target.value, this.props.activeType, this.props.perPage)}
                    />
                </div>
                <div className="settings-block">
                    <div className="title-separator">Settings</div>
                    <Selection
                        title="Video type"
                        items={VIDEO_TYPES}
                        active={activeType}
                        onItemChanged={this.setVideoType}
                    />
                    <Selection
                        title="Per page"
                        items={PER_PAGE_VALUES}
                        active={perPage}
                        onItemChanged={this.setPerPageValue}
                    />
                    <button className="save" onClick={() => updateSettings(perPage, activeType)}>Update settings</button>
                </div>
                <div className="page-info-block">
                    <div className="title-separator">Page info</div>
                    <div className="info">
                        <PageInfo subtitle="Per page" value={pageInfo.perPage} />
                        <PageInfo subtitle="Total count" value={pageInfo.totalCount} />
                    </div>
                </div>
            </section>
        );
    }
}
