import React, { useState } from 'react'

const Hero = () => {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...droppedFiles.slice(0, 5)])
  }

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(0, 5)
    setFiles(prev => [...prev, ...selectedFiles])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleUpload = () => {
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      // Simulate share link generation
      navigator.clipboard.writeText('https://slicedrive.com/share/abc123')
      alert('Files uploaded! Link copied to clipboard.')
    }, 2000)
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Slice & Share <span className="gradient-text">Large Files</span> 
              Instantly
            </h1>
            <p className="hero-subtitle">
              Upload files up to <strong>10GB</strong>. AI-powered slicing, 
              secure sharing, zero-knowledge encryption. No sign-up required.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10GB</div>
                <div className="stat-label">Max File Size</div>
              </div>
              <div className="stat">
                <div className="stat-number">256-bit</div>
                <div className="stat-label">Encryption</div>
              </div>
              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">Downloads</div>
              </div>
            </div>
          </div>
          
          <div className="hero-upload">
            <div 
              className={`upload-area ${dragActive ? 'drag-active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="upload-content">
                <div className="upload-icon">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <h3>Drop files here or click to browse</h3>
                <p>Supports up to 5 files • Max 10GB total</p>
                <label htmlFor="file-upload" className="upload-btn">
                  <i className="fas fa-folder-open"></i> Select Files
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="file-input"
                  accept="*/*"
                />
              </div>
            </div>

            {files.length > 0 && (
              <div className="files-preview">
                <div className="files-header">
                  <h4>Selected Files ({files.length}/5)</h4>
                  <button 
                    className="clear-all-btn"
                    onClick={() => setFiles([])}
                  >
                    Clear All
                  </button>
                </div>
                <div className="files-list">
                  {files.map((file, index) => (
                    <div key={index} className="file-item">
                      <div className="file-info">
                        <i className="fas fa-file"></i>
                        <div>
                          <div className="file-name">{file.name}</div>
                          <div className="file-size">
                            {(file.size / 1024 / 1024).toFixed(1)} MB
                          </div>
                        </div>
                      </div>
                      <button 
                        className="remove-file"
                        onClick={() => removeFile(index)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {files.length > 0 && (
              <button 
                className="upload-btn-primary"
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <div className="spinner"></div>
                    Slicing & Uploading...
                  </>
                ) : (
                  <>
                    <i className="fas fa-rocket"></i>
                    Generate Share Link
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero