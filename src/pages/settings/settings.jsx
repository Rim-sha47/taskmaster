// src/pages/settings/Settings.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, Lock, Palette, Globe, Shield, Save, Moon, Sun, Mail, Phone } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import toast from "react-hot-toast";

function Settings() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    emailAlerts: true,
    twoFactorAuth: false,
    language: "english",
    theme: "purple",
  });

  useEffect(() => {
    const saved = localStorage.getItem("userSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    toast.success("Settings saved successfully!");
  };

  const sections = [
    {
      title: "Appearance",
      icon: Palette,
      settings: [
        {
          key: "darkMode",
          label: "Dark Mode",
          description: "Switch between light and dark theme",
          type: "toggle",
          icon: settings.darkMode ? Moon : Sun,
        },
        {
          key: "theme",
          label: "Theme Color",
          description: "Choose your preferred accent color",
          type: "select",
          options: ["purple", "blue", "green", "pink"],
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        {
          key: "notifications",
          label: "Push Notifications",
          description: "Receive real-time notifications",
          type: "toggle",
        },
        {
          key: "emailAlerts",
          label: "Email Alerts",
          description: "Get updates via email",
          type: "toggle",
        },
      ],
    },
    {
      title: "Security",
      icon: Shield,
      settings: [
        {
          key: "twoFactorAuth",
          label: "Two-Factor Authentication",
          description: "Add an extra layer of security",
          type: "toggle",
        },
      ],
    },
    {
      title: "Preferences",
      icon: Globe,
      settings: [
        {
          key: "language",
          label: "Language",
          description: "Select your preferred language",
          type: "select",
          options: ["english", "spanish", "french", "german"],
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        subtitle="Manage your account preferences"
      />

      <div className="space-y-6">
        {sections.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <section.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
            </div>
            <div className="divide-y divide-white/10">
              {section.settings.map((setting) => (
                <div key={setting.key} className="p-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {setting.icon && <setting.icon className="w-4 h-4 text-gray-400" />}
                      <h3 className="text-white font-medium">{setting.label}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{setting.description}</p>
                  </div>
                  <div>
                    {setting.type === "toggle" ? (
                      <button
                        onClick={() => setSettings({ ...settings, [setting.key]: !settings[setting.key] })}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          settings[setting.key] ? "bg-purple-600" : "bg-gray-600"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                            settings[setting.key] ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    ) : setting.type === "select" ? (
                      <select
                        value={settings[setting.key]}
                        onChange={(e) => setSettings({ ...settings, [setting.key]: e.target.value })}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
                      >
                        {setting.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                          </option>
                        ))}
                      </select>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <Mail className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Email Address</p>
              <p className="text-white">john.doe@example.com</p>
            </div>
            <button className="text-purple-400 hover:text-purple-300 text-sm">Change</button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <Phone className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Phone Number</p>
              <p className="text-white">+1 234 567 8900</p>
            </div>
            <button className="text-purple-400 hover:text-purple-300 text-sm">Add</button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <Lock className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Password</p>
              <p className="text-white">••••••••</p>
            </div>
            <button className="text-purple-400 hover:text-purple-300 text-sm">Update</button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg transition"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;