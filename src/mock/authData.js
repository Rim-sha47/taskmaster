// src/mock/authData.js
export const authData = {
  users: [
    {
      id: 1,
      email: "admin@taskmaster.com",
      password: "admin123",
      name: "Admin User",
      role: "admin",
      token: "mock-jwt-token-admin-123",
      refreshToken: "mock-refresh-token-admin-456"
    },
    {
      id: 2,
      email: "user@taskmaster.com",
      password: "user123",
      name: "Regular User",
      role: "user",
      token: "mock-jwt-token-user-789",
      refreshToken: "mock-refresh-token-user-012"
    },
    {
      id: 3,
      email: "manager@taskmaster.com",
      password: "manager123",
      name: "Manager User",
      role: "manager",
      token: "mock-jwt-token-manager-345",
      refreshToken: "mock-refresh-token-manager-678"
    }
  ],
  
  loginAttempts: new Map(),
  
  otpStore: new Map(),
  
  resetTokens: new Map()
};

export const validateLogin = (email, password) => {
  const user = authData.users.find(
    u => u.email === email && u.password === password
  );
  
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      user: userWithoutPassword,
      token: user.token,
      refreshToken: user.refreshToken
    };
  }
  
  return {
    success: false,
    error: "Invalid email or password"
  };
};

export const generateOTP = (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  authData.otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutes
  });
  return otp;
};

export const verifyOTP = (email, otp) => {
  const storedOTP = authData.otpStore.get(email);
  if (!storedOTP) return false;
  if (storedOTP.expiresAt < Date.now()) return false;
  return storedOTP.otp === otp;
};

export const createResetToken = (email) => {
  const token = Math.random().toString(36).substring(2, 15);
  authData.resetTokens.set(token, {
    email,
    expiresAt: Date.now() + 60 * 60 * 1000 // 1 hour
  });
  return token;
};

export const validateResetToken = (token) => {
  const resetData = authData.resetTokens.get(token);
  if (!resetData) return null;
  if (resetData.expiresAt < Date.now()) return null;
  return resetData.email;
};