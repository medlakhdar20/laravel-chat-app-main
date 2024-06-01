import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faComment, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ChatUserInfoHeader({ receiver }) {
    return (
        <div className="user-info-header bg-white px-5 py-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={receiver?.avatar ? faUserCircle : faUserCircle} className="text-gray-300 text-5xl mr-4" />
                    <h3 className="text-lg text-gray-400">{receiver?.name}</h3>
                </div>
                <div className="flex">
                    <FontAwesomeIcon icon={faComment} className="text-violet-300 mr-3" />
                    <FontAwesomeIcon icon={faVideo} className="text-gray-200 mr-3" />
                    <FontAwesomeIcon icon={faPhone} className="text-gray-200" />
                </div>
            </div>
        </div>
    );
}
