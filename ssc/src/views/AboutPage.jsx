import React from 'react';

function AboutPage() {
    const styles = {
        container: { padding: '50px 20px' },
        title: { fontSize: '2em', marginBottom: '20px' },
        section: { marginBottom: '30px' },
        sectionTitle: { fontSize: '1.5em', marginBottom: '15px' }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Study Session Connect</h1>

            <div style={styles.section}>
                <p><strong>Lead:</strong> John Cohen</p>
                <p><strong>Contributors:</strong> Alex Liu, Stanley Guo</p>
                <p><strong>Milestones:</strong> Study Session Connect Scrum Sprints</p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Project Description:</h2>
                <p>
                    In today's fast-paced academic environment, students often face challenges when it comes to finding effective study partners and coordinating study sessions. To address this need, we propose the development of a dynamic and user-friendly platform called Study Session Connect. This platform will revolutionize the way students collaborate for enhanced learning experiences.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
