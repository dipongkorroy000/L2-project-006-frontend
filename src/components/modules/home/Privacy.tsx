import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-sm sm:text-base lg:text-lg text-muted-foreground">
          <p>
            At <span className="font-semibold">ParcelX</span>, we value your privacy. This policy explains how we collect, use, and protect your information
            when you use our delivery services.
          </p>

          <Separator />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Information We Collect</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal details (name, phone, email, address)</li>
              <li>Delivery information (pickup & drop-off locations)</li>
              <li>Payment details (processed securely via third-party providers)</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">2. How We Use Your Information</h3>
            <p>We use your data to process deliveries, provide customer support, and improve our platform. We never sell your information to third parties.</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Data Protection</h3>
            <p>Your information is stored securely. We implement encryption and access controls to protect against unauthorized access.</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">4. Your Rights</h3>
            <p>You may request access, correction, or deletion of your personal data at any time by contacting our support team.</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please reach out to <span className="font-semibold">support@parcelx.com</span>.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
