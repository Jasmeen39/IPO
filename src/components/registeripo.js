import React, { useState } from 'react';

const IPOManagement = () => {
  const [activeTab, setActiveTab] = useState('information');
  const [formData, setFormData] = useState({
    companyName: '',
    priceBand: '',
    openDate: '',
    closeDate: '',
    issueSize: '2300 Cr.',
    issueType: '',
    listingDate: '',
    description: '',
    status: 'Active',
    ipoPrice: '₹ 333',
    listingPrice: '₹ 435',
    listingGain: '13.58 %',
    listingDate2: '2024-05-05',
    cmp: '₹ 408',
    currentReturn: '705 %',
    rhp: '',
    drhp: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('IPO Data:', formData);
    alert('IPO information updated successfully!');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '24px'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      marginBottom: '24px'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#1a202c',
      marginBottom: '8px'
    },
    headerSubtitle: {
      color: '#718096'
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px'
    },
    primaryButton: {
      padding: '8px 24px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.2s'
    },
    secondaryButton: {
      padding: '8px 24px',
      backgroundColor: 'transparent',
      color: '#374151',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.2s'
    },
    mainContent: {
      display: 'flex',
      gap: '24px'
    },
    sidebar: {
      width: '256px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px'
    },
    sidebarNav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    navButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#374151',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      textAlign: 'left',
      transition: 'all 0.2s'
    },
    navButtonActive: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#eff6ff',
      color: '#2563eb',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      textAlign: 'left',
      borderLeft: '4px solid #2563eb'
    },
    content: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '24px'
    },
    contentHeader: {
      marginBottom: '24px'
    },
    contentTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a202c',
      marginBottom: '8px'
    },
    contentSubtitle: {
      color: '#718096'
    },
    section: {
      marginBottom: '24px'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#1a202c',
      marginBottom: '16px'
    },
    logoSection: {
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '24px',
      marginBottom: '24px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    logoIcon: {
      width: '64px',
      height: '64px',
      background: 'linear-gradient(135deg, #fb923c, #ef4444)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    logoInfo: {
      flex: 1
    },
    logoTitle: {
      fontWeight: '500',
      color: '#1a202c',
      marginBottom: '4px'
    },
    logoStatus: {
      fontSize: '14px',
      color: '#718096'
    },
    logoButtons: {
      display: 'flex',
      gap: '8px'
    },
    smallButton: {
      padding: '6px 16px',
      fontSize: '14px',
      fontWeight: '500',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    smallPrimaryButton: {
      padding: '6px 16px',
      fontSize: '14px',
      fontWeight: '500',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    smallSecondaryButton: {
      padding: '6px 16px',
      fontSize: '14px',
      fontWeight: '500',
      backgroundColor: 'transparent',
      color: '#374151',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '24px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      outline: 'none'
    },
    select: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: 'white',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      outline: 'none'
    },
    sectionDivider: {
      borderTop: '1px solid #e2e8f0',
      paddingTop: '24px',
      marginTop: '24px'
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
      paddingTop: '24px',
      borderTop: '1px solid #e2e8f0',
      marginTop: '24px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div>
              <h1 style={styles.headerTitle}>Upcoming IPO Information</h1>
              <p style={styles.headerSubtitle}>Manage your IPO Details</p>
            </div>
            <div style={styles.buttonGroup}>
              <button 
                style={styles.primaryButton}
                onClick={handleSubmit}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                Register
              </button>
              <button 
                style={styles.secondaryButton}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div style={styles.mainContent}>
          {/* Sidebar */}
          <div style={styles.sidebar}>
            <nav style={styles.sidebarNav}>
              <button
                onClick={() => setActiveTab('information')}
                style={activeTab === 'information' ? styles.navButtonActive : styles.navButton}
                onMouseOver={(e) => {
                  if (activeTab !== 'information') {
                    e.target.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== 'information') {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                📄 IPO Information
              </button>
              <button
                onClick={() => setActiveTab('info')}
                style={activeTab === 'info' ? styles.navButtonActive : styles.navButton}
                onMouseOver={(e) => {
                  if (activeTab !== 'info') {
                    e.target.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== 'info') {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                🏢 IPO Info
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div style={styles.content}>
            <div style={styles.contentHeader}>
              <h2 style={styles.contentTitle}>IPO Information</h2>
              <p style={styles.contentSubtitle}>Enter IPO Details</p>
            </div>

            <div>
              {/* Company Logo Section */}
              <div style={styles.logoSection}>
                <h3 style={styles.sectionTitle}>Company Logo</h3>
                <div style={styles.logoContainer}>
                  <div style={styles.logoIcon}>
                    M
                  </div>
                  <div style={styles.logoInfo}>
                    <p style={styles.logoTitle}>MSE India</p>
                    <p style={styles.logoStatus}>Uploaded</p>
                  </div>
                  <div style={styles.logoButtons}>
                    <button
                      style={styles.smallPrimaryButton}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                    >
                      Upload Logo
                    </button>
                    <button
                      style={styles.smallSecondaryButton}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Fields Grid */}
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Company Name</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Vodafone Idea"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Price Band</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="priceBand"
                    value={formData.priceBand}
                    onChange={handleChange}
                    placeholder="Not Issued"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Open</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="openDate"
                    value={formData.openDate}
                    onChange={handleChange}
                    placeholder="Not Issued"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Close</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="closeDate"
                    value={formData.closeDate}
                    onChange={handleChange}
                    placeholder="Not Issued"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Issue Size</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="issueSize"
                    value={formData.issueSize}
                    onChange={handleChange}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Issue Type</label>
                  <select
                    style={styles.select}
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select issue type</option>
                    <option value="Book Built Issue">Book Built Issue</option>
                    <option value="Fixed Price Issue">Fixed Price Issue</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Listing Date</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="listingDate"
                    value={formData.listingDate}
                    onChange={handleChange}
                    placeholder="Not Issued"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Status</label>
                  <select
                    style={styles.select}
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              {/* New Listed IPO Details Section */}
              <div style={styles.sectionDivider}>
                <h3 style={styles.sectionTitle}>NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h3>
                
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>IPO PRICE</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="ipoPrice"
                      value={formData.ipoPrice}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>LISTING PRICE</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="listingPrice"
                      value={formData.listingPrice}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>LISTING GAIN</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="listingGain"
                      value={formData.listingGain}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>LISTING DATE</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="listingDate2"
                      value={formData.listingDate2}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>CMP</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="cmp"
                      value={formData.cmp}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>CURRENT RETURN</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="currentReturn"
                      value={formData.currentReturn}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>RHP</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="rhp"
                      value={formData.rhp}
                      onChange={handleChange}
                      placeholder="Enter RHP PDF Link"
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>DRHP</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="drhp"
                      value={formData.drhp}
                      onChange={handleChange}
                      placeholder="Enter DRHP PDF Link"
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={styles.actionButtons}>
                <button
                  style={styles.secondaryButton}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Cancel
                </button>
                <button
                  style={styles.primaryButton}
                  onClick={handleSubmit}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOManagement;