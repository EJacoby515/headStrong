import React from 'react';
import LegalModal from './legalModal';

interface PrivacyPolicyProps {
  isVisible: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isVisible, onClose }) => {
  const privacyContent = `
HEADSTRONG PRIVACY POLICY

Last Updated: [Current Date]

HeadStrong ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APP.

...

[Include the rest of your Privacy Policy content here]
  `;

  return (
    <LegalModal
      isVisible={isVisible}
      onClose={onClose}
      title="Privacy Policy"
      content={privacyContent}
    />
  );
};

export default PrivacyPolicy;