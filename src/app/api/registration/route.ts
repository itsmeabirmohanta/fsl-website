import { NextRequest, NextResponse } from 'next/server';

/**
 * Mock API endpoint to handle event registration submissions
 * In a production environment, this would connect to a database
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract the registration data
    const { eventId, formData } = body;
    
    // Validate required data
    if (!eventId) {
      return NextResponse.json(
        { success: false, message: 'Event ID is required' },
        { status: 400 }
      );
    }
    
    if (!formData) {
      return NextResponse.json(
        { success: false, message: 'Form data is required' },
        { status: 400 }
      );
    }
    
    // Validate email format if provided
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address format' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Validate the data more thoroughly
    // 2. Save the registration to a database
    // 3. Send confirmation emails
    // 4. Update event attendance counters
    // 5. Possibly process payments
    
    console.log(`Registration received for event ${eventId}:`, formData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a successful response
    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
      confirmationNumber: `CONF-${Date.now().toString().substring(6)}`,
      data: {
        eventId,
        submittedAt: new Date().toISOString(),
      }
    });
    
  } catch (error) {
    console.error('Error processing registration:', error);
    
    // Return an error response
    return NextResponse.json(
      { success: false, message: 'Failed to process registration' },
      { status: 500 }
    );
  }
} 