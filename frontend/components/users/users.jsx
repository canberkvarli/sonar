import React from 'react'
import TrackIndex from '../tracks/track_index';
import TrackIndexContainer from '../tracks/track_index_container';

const _ = require('lodash');

class Users extends React.Component {
    constructor(props) {
        super(props)

        Object.filter = (obj, predicate) =>
            Object.keys(obj)
                .filter(key => predicate(obj[key]))
                .reduce((res, key) => (res[key] = obj[key], res), {});
        this.state = {
            pageOwner: this.props.pageOwner,
        }
    
    }
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
        // this.props.fetchTracks()
    }
    componentDidUpdate(prevProps) {
        const tempObj = { ...this.props.pageOwner }
        const tempObj2 = { ...prevProps.pageOwner }
        if (this.props.pageOwner) {
            if (!_.isEqual(tempObj, tempObj2)) {
                this.setState({ pageOwner: Object.filter(this.props.pageOwner, value => value != 'null' && value != 'undefined') })
            }
        }

    }
    postedTracks() {
        const { postedTracks } = this.props

        return postedTracks.map(track => {
            // 
            return (
                <TrackIndexContainer
                    trackId={track.id}
                    key={track.id}
                />
                )
            }
        )
    }

    render() {
        const { currentUser, openModal } = this.props
        const { pageOwner } = this.state
        if (!!!pageOwner) {
            return (<></>)
        } else {
            let currentUserOwnsPage
            if (currentUser) { currentUserOwnsPage = pageOwner.id === currentUser.id }
            return (

                <div className="user-show-page">
                    <div className="user-show-top">
                        <div className="header-photo-container">
                            <img className='user-page-header' src={pageOwner.headerUrl} />
                        </div>
                        <div className="us-header-left">

                            <div className="profile-pic-container">
                                <img className='user-page-avatar' src={pageOwner.avatarUrl} />
                            </div>
                            <div className="user-show-info-container">

                                <div className="user-show-info">
                                    <h1 className="disp-name">{pageOwner.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-header-profile">
                        <h1>Your tracks</h1>
                    </div>
                    <div className="user-show-mc">

                        <div className="track-container-user-show">
                            {this.postedTracks()}
                        </div>

                        <div className="right-hand-bar">
                            {pageOwner.bio ? (
                                <h1 className="user-show-bio">Bio</h1>

                            ) : <h1 className="user-show-bio">Tell the story</h1>}
                            <br />
                            <p>{pageOwner.bio}</p>
                        </div>

                    </div>

                </div>
            )
        }
    }
}

export default Users