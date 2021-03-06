import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import styles from './featuredJob.css';

const FeaturedJob = ({
  title,
  source,
  sourceUrl,
  city,
  state,
  country,
  description,
  remote
}) => (
  <div>
    <div className={styles.job}>
      <div>
        <OutboundLink href={sourceUrl} analyticsEventLabel={`[FeaturedJob] ${sourceUrl}`}>
          <span className={styles.link}>{title}</span>
        </OutboundLink>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsContainer}>
          <FontAwesomeIcon icon={faBuilding} size="sm" style={{ color: '#afafaf' }} />
          <span className={styles.detail}>{source}</span>
        </div>
        <div className={styles.detailsContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" style={{ color: '#afafaf' }} />
          {city && <span className={styles.detail}>{city},</span>}
          {state && <span className={styles.detail}>{state},</span>}
          {country && <span className={styles.detail}>{country}</span>}
        </div>
        {remote &&
          <div className={styles.detailsContainer}>
            <FontAwesomeIcon icon={faCloudUploadAlt} size="sm" style={{ color: '#afafaf' }} />
            <span className={styles.remote}>Remote</span>
          </div>
        }
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  </div >
);

FeaturedJob.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  remote: PropTypes.bool
};

FeaturedJob.defaultProps = {
  remote: false
};

export default FeaturedJob;
