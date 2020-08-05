module.exports = {
	projects: [
		{
			displayName: 'node',
			preset: 'ts-jest',
			testEnvironment: 'node',
		},
		{
			displayName: 'pytest',
			moduleFileExtensions: ['py'],
			runner: 'jest-pytest',
			testPathIgnorePatterns: [],
			testMatch: ['<rootDir>/pytest/test_*.py']
		  
		}
	]
};