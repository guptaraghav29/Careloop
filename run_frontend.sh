#!/bin/bash

# HealthTrack AI - Frontend Launcher
# Runs the frontend on localhost:8000

echo "======================================================================"
echo "  CareLoop - HealthTrack AI Frontend"
echo "======================================================================"
echo ""
echo "Starting local web server..."
echo ""
echo "Frontend will be available at:"
echo "  🌐 http://localhost:8000/frontend.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "======================================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "frontend.html" ]; then
    echo "Error: frontend.html not found. Please run this script from the project root."
    exit 1
fi

# Start Python HTTP server
python3 -m http.server 8000
