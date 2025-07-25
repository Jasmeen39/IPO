import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  { company: 'Adani Power', priceBand: '₹ 129 - 136', open: '2023-06-03', close: '2024-06-05', issueSize: '45530.15 Cr.', issueType: 'Book Built', listingDate: '2023-06-10', status: 'Ongoing' },
  { company: 'VBL LTD', priceBand: '₹ 229 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '1330.15 Cr.', issueType: 'Book Built', listingDate: '2018-06-10', status: 'Comming' },
  { company: 'Tata Motor', priceBand: '₹ 1259 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '1340.15 Cr.', issueType: 'Book Built', listingDate: '2016-06-10', status: 'New Listed' },
  { company: 'HDFC LTD', priceBand: '₹ 1244 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '830.15 Cr.', issueType: 'Book Built', listingDate: '2029-06-11', status: 'Comming' },
  { company: 'Tata Motor', priceBand: '₹ 628 - 136', open: '2024-06-01', close: '2024-06-05', issueSize: '820.15 Cr.', issueType: 'Book Built', listingDate: '2023-06-10', status: 'Ongoing' },
  { company: 'VBL LTD', priceBand: '₹ 629 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '130.15 Cr.', issueType: 'Book Built', listingDate: '2024-06-10', status: 'Comming' },
  { company: 'Tata Motor', priceBand: '₹ 6728 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '170.15 Cr.', issueType: 'Book Built', listingDate: '2027-06-10', status: 'New Listed' },
  { company: 'VBL LTD', priceBand: '₹ 1629 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '140.15 Cr.', issueType: 'Book Built', listingDate: '2022-06-10', status: 'Comming' },
  { company: 'Tata Motor', priceBand: '₹ 2329 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '130.15 Cr.', issueType: 'Book Built', listingDate: '2023-06-10', status: 'New Listed' },
  { company: 'VBL LTD', priceBand: '₹ 329 - 136', open: '2024-06-03', close: '2024-06-05', issueSize: '110.15 Cr.', issueType: 'Book Built', listingDate: '2023-06-10', status: 'Comming' }
];

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '24px'
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#111827',
    margin: 0
  },
  registerButton: {
    color: '#2563eb',
    fontSize: '14px',
    fontWeight: '400',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s'
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  thead: {
    backgroundColor: '#f9fafb'
  },
  th: {
    textAlign: 'left',
    padding: '16px 24px',
    fontWeight: '600',
    color: '#374151',
    fontSize: '14px',
    borderBottom: '1px solid #f3f4f6'
  },
  tbody: {
    backgroundColor: 'white'
  },
  tr: {
    borderBottom: '1px solid #f9fafb',
    transition: 'background-color 0.2s'
  },
  td: {
    padding: '16px 24px',
    fontSize: '14px',
    color: '#374151'
  },
  companyName: {
    fontWeight: '500',
    color: '#111827'
  },
  statusBadge: {
    padding: '4px 16px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '500',
    border: '1px solid',
    display: 'inline-block'
  },
  ongoingStatus: {
    backgroundColor: '#f0fdf4',
    color: '#16a34a',
    borderColor: '#bbf7d0'
  },
  commingStatus: {
    backgroundColor: '#fffbeb',
    color: '#d97706',
    borderColor: '#fed7aa'
  },
  newListedStatus: {
    backgroundColor: '#fdf2f8',
    color: '#db2777',
    borderColor: '#fbcfe8'
  },
  updateButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '6px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    transition: 'color 0.2s'
  },
  deleteIcon: {
    color: '#ef4444'
  },
  viewIcon: {
    color: '#6b7280'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '32px',
    gap: '4px'
  },
  pageButton: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    backgroundColor: 'white',
    color: '#374151',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  activePageButton: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#2563eb',
    color: 'white',
    cursor: 'pointer'
  },
  dots: {
    padding: '0 8px',
    color: '#6b7280'
  }
};

const getStatusBadge = (status) => {
  const baseStyle = { ...styles.statusBadge };
  
  switch (status) {
    case 'Ongoing':
      return { ...baseStyle, ...styles.ongoingStatus };
    case 'Comming':
      return { ...baseStyle, ...styles.commingStatus };
    case 'New Listed':
      return { ...baseStyle, ...styles.newListedStatus };
    default:
      return baseStyle;
  }
};

const DeleteIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const ViewIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

const Upcomingipo = () => {
  const handleRegisterClick = () => {
    console.log('Register IPO clicked');
  };

  const handleUpdateClick = (company) => {
    console.log('Update clicked for:', company);
  };

  const handleDeleteClick = (company) => {
    console.log('Delete clicked for:', company);
  };

  const handleViewClick = (company) => {
    console.log('View clicked for:', company);
  };

  const handlePageClick = (page) => {
    console.log('Page clicked:', page);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Upcomming IPO | Dashboard</h1>
          <Link 
  to="/admin/manageipo/registeripo"
  style={{
    ...styles.registerButton,
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  }}
  onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
  onMouseLeave={(e) => e.target.style.color = 'white'}
>
  Register IPO
</Link>
        </div>

        {/* Table Container */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>Company</th>
                <th style={styles.th}>Price Band</th>
                <th style={styles.th}>Open</th>
                <th style={styles.th}>Close</th>
                <th style={styles.th}>ISSUE SIZE</th>
                <th style={styles.th}>ISSUE Type</th>
                <th style={styles.th}>Listing Date</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
                <th style={styles.th}>Delete/View</th>
              </tr>
            </thead>
            <tbody style={styles.tbody}>
              {data.map((ipo, index) => (
                <tr 
                  key={index} 
                  style={styles.tr}
                  onMouseEnter={(e) => e.target.parentElement.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.target.parentElement.style.backgroundColor = 'white'}
                >
                  <td style={{...styles.td, ...styles.companyName}}>{ipo.company}</td>
                  <td style={styles.td}>{ipo.priceBand}</td>
                  <td style={styles.td}>{ipo.open}</td>
                  <td style={styles.td}>{ipo.close}</td>
                  <td style={styles.td}>{ipo.issueSize}</td>
                  <td style={styles.td}>{ipo.issueType}</td>
                  <td style={styles.td}>{ipo.listingDate}</td>
                  <td style={styles.td}>
                    <span style={getStatusBadge(ipo.status)}>
                      {ipo.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button 
                      style={styles.updateButton}
                      onClick={() => handleUpdateClick(ipo.company)}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                    >
                      Update
                    </button>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.actionButtons}>
                      <button 
                        style={{...styles.iconButton, ...styles.deleteIcon}}
                        onClick={() => handleDeleteClick(ipo.company)}
                        onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                        onMouseLeave={(e) => e.target.style.color = '#ef4444'}
                        title="Delete"
                      >
                        <DeleteIcon />
                      </button>
                      <button 
                        style={{...styles.iconButton, ...styles.viewIcon}}
                        onClick={() => handleViewClick(ipo.company)}
                        onMouseEnter={(e) => e.target.style.color = '#374151'}
                        onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                        title="View"
                      >
                        <ViewIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={styles.pagination}>
          <button 
            style={styles.activePageButton}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
          <button 
            style={styles.pageButton}
            onClick={() => handlePageClick(2)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            2
          </button>
          <span style={styles.dots}>...</span>
          <button 
            style={styles.pageButton}
            onClick={() => handlePageClick(9)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            9
          </button>
          <button 
            style={styles.pageButton}
            onClick={() => handlePageClick(10)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upcomingipo;