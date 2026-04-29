import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto px-6 py-16 lg:px-8 max-w-4xl pt-32">
      <h1 className="text-4xl font-bold text-text-primary mb-8">Terms and Conditions</h1>
      
      <div className="prose prose-lg text-text-secondary">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using NoteBean's services, you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of the terms, then you may not access the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on 
            NoteBean's website for personal, non-commercial transitory viewing only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on NoteBean's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on NoteBean's website are provided on an 'as is' basis. NoteBean makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
            of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall NoteBean or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
            to use the materials on NoteBean's website, even if NoteBean or a NoteBean authorized representative has 
            been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction 
            in which NoteBean is established, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
