import React from 'react';
import LegalModal from './legalModal';

interface TermsOfServiceProps {
  isVisible: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ isVisible, onClose }) => {
  const termsContent = `
HEADSTRONG TERMS OF SERVICE

Last Updated: [Current Date]

1. Acceptance of Terms

By accessing or using the HeadStrong application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the App.

2. Description of Service

HeadStrong is a mental health and wellness application that provides mood tracking, peer support, and self-help resources. The App is not a substitute for professional medical advice, diagnosis, or treatment.

...

[Include the rest of your Terms of Service content here]
  `;

  return (
    <LegalModal
      isVisible={isVisible}
      onClose={onClose}
      title="Terms of Service"
      content={termsContent}
    />
  );
};

export default TermsOfService;