import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Text style={styles.completeProfileText}>Lengkapi Profilmu</Text>
        <View style={styles.profileDetails}>
          <Text style={styles.memberBadge}>Elite Member</Text>
          <Text style={styles.phoneNumber}>Prabayar | 0882 5824 8769</Text>
          <Text style={styles.expiryDate}>Berakhir | 15 Jan 2025</Text>
        </View>
      </View>

      {/* Balance and Internet Info */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Rp 6</Text>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      {/* Internet & Voice Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Internet (2)</Text>
          <Text style={styles.detailValue}>0 MB</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Batas Harian</Text>
          <Text style={styles.detailValue}>1.80 GB</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Voice</Text>
          <Text style={styles.detailValue}>Sepuasnya</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Bonus</Text>
          <Text style={styles.detailValue}>-</Text>
        </View>
      </View>

      {/* Plan and Other Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Beli Paket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Riwayat</Text>
        </TouchableOpacity>
      </View>

      {/* SmartPoint and Voucher */}
      <View style={styles.rewardsContainer}>
        <View style={styles.rewardItem}>
          <Text>1.915 SmartPoint</Text>
          <Text>Tukar Sekarang Yuk!</Text>
        </View>
        <View style={styles.rewardItem}>
          <Text>Voucher Saya</Text>
          <Text>0 Voucher</Text>
        </View>
      </View>

      {/* Usage Warning */}
      <View style={styles.usageWarning}>
        <Text>Yah, kuota utama internet-mu sudah habis nih. Mau beli paketnya lagi?</Text>
        <Text style={styles.internetLeft}>0 KB Internet</Text>
        <Text>Exp. 4 hari lagi</Text>
      </View>

      {/* Package Options */}
      <View style={styles.packageOptions}>
        <Text>Kuota 10 GB - Rp 33.000</Text>
        <Text>Kuota 16 GB - Rp 44.000</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text>Home</Text>
        <Text>Paket</Text>
        <Text>Rewards</Text>
        <Text>Bantuan</Text>
        <Text>More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  profileContainer: { padding: 10, backgroundColor: "#f8f8f8", borderRadius: 10, marginBottom: 16 },
  completeProfileText: { fontWeight: "bold", color: "#d81b60" },
  profileDetails: { marginTop: 8 },
  memberBadge: { fontWeight: "bold", color: "#444" },
  phoneNumber: { color: "#666" },
  expiryDate: { color: "#666" },
  balanceContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  balanceText: { fontSize: 18, fontWeight: "bold" },
  topUpButton: { backgroundColor: "#d81b60", padding: 8, borderRadius: 5 },
  topUpText: { color: "#fff" },
  detailsContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 16 },
  detailItem: { alignItems: "center" },
  detailTitle: { fontSize: 14, color: "#666" },
  detailValue: { fontSize: 16, fontWeight: "bold" },
  actionsContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 16 },
  actionButton: { padding: 10, backgroundColor: "#f1f1f1", borderRadius: 5 },
  rewardsContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 16 },
  rewardItem: { alignItems: "center" },
  usageWarning: { padding: 16, backgroundColor: "#ffefef", borderRadius: 10, marginBottom: 16 },
  internetLeft: { fontWeight: "bold", color: "#d81b60" },
  packageOptions: { padding: 16, backgroundColor: "#f8f8f8", borderRadius: 10, marginBottom: 16 },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 16, borderTopWidth: 1, borderColor: "#ddd" },
});

export default App;
