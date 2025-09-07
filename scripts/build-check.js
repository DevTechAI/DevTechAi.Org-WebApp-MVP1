#!/usr/bin/env node

/**
 * Build verification script for DevTechAi.Org
 * Checks for common build issues before deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Running build verification checks...\n');

// Check 1: Verify next.config.js exists and is valid
try {
  const configPath = path.join(process.cwd(), 'next.config.js');
  if (fs.existsSync(configPath)) {
    console.log('✅ next.config.js found');
    
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for problematic configurations
    if (configContent.includes('optimizeCss: true')) {
      console.log('⚠️  Warning: optimizeCss is enabled - ensure critters is installed');
    }
    
    if (configContent.includes('output: \'export\'')) {
      console.log('⚠️  Warning: Static export mode detected');
    }
    
    console.log('✅ next.config.js validation passed');
  } else {
    console.log('❌ next.config.js not found');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ Error reading next.config.js:', error.message);
  process.exit(1);
}

// Check 2: Verify package.json exists
try {
  const packagePath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packagePath)) {
    console.log('✅ package.json found');
    
    const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    if (packageContent.scripts && packageContent.scripts.build) {
      console.log('✅ Build script found');
    } else {
      console.log('❌ Build script not found in package.json');
      process.exit(1);
    }
  } else {
    console.log('❌ package.json not found');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
  process.exit(1);
}

// Check 3: Verify critical directories exist
const criticalDirs = ['app', 'components', 'public'];
criticalDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/ directory found`);
  } else {
    console.log(`❌ ${dir}/ directory not found`);
    process.exit(1);
  }
});

console.log('\n🎉 All build verification checks passed!');
console.log('🚀 Ready for deployment');
